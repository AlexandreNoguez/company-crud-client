import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

/**
 * Handles Axios errors and shows a toast message.
 *
 * @param error - The error object caught in a try/catch block.
 * @param fallbackMessage - Default message shown if no specific error message is available.
 */
export function handleAxiosError(error: unknown, fallbackMessage: string) {
  console.error('Axios error:', error);

  if (error instanceof AxiosError && error.response) {
    const message = error.response.data?.message ?? fallbackMessage;

    toast.error(message);
  } else {
    toast.error(fallbackMessage);
  }

  throw error;
}
