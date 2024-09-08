#!/bin/bash

# Default values (you can override these by passing arguments)
REPO_URL="https://github.com/aj0urdain/Landmark"
START_TIME="$current_date 06:00"
END_TIME="$current_date 20:00"
BRANCHES_OPTION="--all"
REPORT_TYPE="work"  # Default to 'work'

# Get the current date
current_date=$(date +"%Y-%m-%d")

# Check if 'home' is passed and adjust values accordingly
if [ "$1" == "home" ]; then
  REPO_URL="https://github.com/Intradark/Landmark-Home"
  START_TIME="$current_date 04:00"
  END_TIME="$(date -d 'tomorrow' +%Y-%m-%d) 02:00"  # End time is 2am of the next day
  REPORT_TYPE="home"  # Change to 'home' report
fi

# Create the commit-reports folder if it doesn't exist
mkdir -p commit-reports

# Define the file path for the report
report_file="commit-reports/commit-report-${REPORT_TYPE}-$current_date.txt"

# Fetch commits based on the time range and from all branches
commits=$(git log $BRANCHES_OPTION --since="$START_TIME" --until="$END_TIME" --pretty=format:"%h - %s (%an)")

# Check if there are any commits in the time window
if [ -z "$commits" ]; then
  echo "No commits found from $START_TIME to $END_TIME." > "$report_file"
else
  echo "Commits from $START_TIME to $END_TIME across all branches:" > "$report_file"

  # Loop through the commits and append the GitHub link for each commit
  git log $BRANCHES_OPTION --since="$START_TIME" --until="$END_TIME" --pretty=format:"%h - %s (%an)" | while read -r commit_entry; do
    commit_hash=$(echo "$commit_entry" | awk '{print $1}')
    commit_link="$REPO_URL/commit/$commit_hash"
    echo "$commit_entry - $commit_link" >> "$report_file"
  done

  echo "Commit report saved to: $report_file"
fi
