import { useAtom} from "jotai"

import { atomWithStorage} from "jotai/utils"

const mainState = atomWithStorage("myData", {} || null)

const useMainState = () =>{
    return useAtom(mainState);
};
export default useMainState;