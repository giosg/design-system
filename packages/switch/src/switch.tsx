import { forwardRef } from "react";
import cx from "classnames";
import * as RadixSwitch from "@radix-ui/react-switch";
import * as styles from "./switch.module.css";

export const _Root = forwardRef<HTMLButtonElement, React.ComponentProps<typeof RadixSwitch.Root>>((props, ref) => {
  const { className, ...rest } = props;
  return <RadixSwitch.Root className={cx(styles.switchRoot, className)} ref={ref} {...rest} />;
});

export const _Thumb = forwardRef<HTMLButtonElement, React.ComponentProps<typeof RadixSwitch.Thumb>>((props, ref) => {
  const { className, ...rest } = props;
  return <RadixSwitch.Thumb className={cx(styles.switchThumb, className)} ref={ref} {...rest} />;
});

export const Switch = forwardRef<HTMLButtonElement, React.ComponentProps<typeof RadixSwitch.Root>>((props, ref) => {
  return (
    <_Root ref={ref} {...props}>
      <_Thumb />
    </_Root>
  );
});
Switch.displayName = "Switch";
