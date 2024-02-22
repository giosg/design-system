import * as RadixToast from "@radix-ui/react-toast";
import styles from "./toast.module.css";

interface ToastProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  description?: string;
}

export function Toast({ open, setOpen, title, description }: ToastProps) {
  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root className={styles.root} onOpenChange={setOpen} open={open}>
        {title ? <RadixToast.Title className={styles.title}>{title}</RadixToast.Title> : null}
        {description ? <RadixToast.Description className={styles.desc}>{description}</RadixToast.Description> : null}
      </RadixToast.Root>
      <RadixToast.Viewport className={styles.viewport} />
    </RadixToast.Provider>
  );
}
