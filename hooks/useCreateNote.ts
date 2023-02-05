import { QueryClient, useMutation } from "react-query";
import axios from "axios";

const createNote = async (note: string) => {
  const { data } = await axios.post("https://voice.dev.bhuman.ai/api/voice/clip", {
    "text": note,
    "voice_id": "405b58e3"
  });
  console.log(data)
  return {};
};

const useCreateNote = () =>
  useMutation(createNote, {
    onSuccess: (response) => {
      // queryClient.invalidateQueries(["notes"]);
    },
  });

export default useCreateNote;
