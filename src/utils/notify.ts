import { useMessage } from "@/providers/MessageProvider";

export const Notify = {
  success: (msg: string) => useMessage()?.success(msg),
  error: (msg: string) => useMessage()?.error(msg),
  info: (msg: string) => useMessage()?.info(msg),
  warning: (msg: string) => useMessage()?.warning(msg),
};
