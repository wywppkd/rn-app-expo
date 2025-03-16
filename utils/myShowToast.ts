import Toast from "react-native-root-toast";

type ToastParams = Parameters<typeof Toast.show>;
export const myShowToast = (
  message: ToastParams[0],
  options?: ToastParams[1],
) => {
  Toast.show(message, {
    position: 0, // 居中
    ...options,
  });
};
