import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <ShadcnButton onClick={onClick}>{label}</ShadcnButton>;
};

export default Button;
