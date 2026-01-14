import { create } from "zustand";

type CounterStore = {
    count:number;
    increment:() => void,
    decrement:() => void,
};

type EmailStore = {
    
}

export const useCounterStore = create<CounterStore>((set)=>({
    count:0,
    increment: () => {
        set( (state) => ({ count:state.count+1 }));
    },
    decrement: () => {
        set((state) => ({ count:state.count-1 }));
    },
}));

export const useSendEmail = create<EmailStore>((set)=>({

}));