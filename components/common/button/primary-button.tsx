import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof Button>;

export default function PrimaryButton({ className, ...props }: Props) {
  return <Button {...props} className={cn("rounded-xl px-7", className)} />;
}
