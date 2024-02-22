import { forwardRef } from "react";
import cx from "classnames";
import * as RadixSwitch from "@radix-ui/react-switch";
import * as styles from "./switch.module.css";

export const Root = forwardRef<HTMLButtonElement, React.ComponentProps<typeof RadixSwitch.Root>>((props, ref) => {
  const { className, ...rest } = props;
  return <RadixSwitch.Root className={cx(styles.switchRoot, className)} ref={ref} {...rest} />;
});

Root.displayName = "SwitchRoot";

export const Thumb = forwardRef<HTMLButtonElement, React.ComponentProps<typeof RadixSwitch.Thumb>>((props, ref) => {
  const { className, ...rest } = props;
  return <RadixSwitch.Thumb className={cx(styles.switchThumb, className)} ref={ref} {...rest} />;
});

Thumb.displayName = "SwitchThumb";
