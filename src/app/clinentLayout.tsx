'use client'
import Provider from "@/components/provider/provider";
import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { ElementRef, ReactNode, forwardRef } from "react";


interface props{
    children:ReactNode;
}

const Child = forwardRef<
  ElementRef<typeof motion.div>,
  { children: ReactNode }
>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{
        duration:0.6,
        ease:"easeInOut"
      }}
    >
        <Provider>
            {props.children}
        </Provider>
    </motion.div>
  );
});

Child.displayName="Child"
const ClinentLayout = (props:props) => {
    const segment=useSelectedLayoutSegment();
    return (
        <>
            <AnimatePresence mode="popLayout" initial={false}>
                <Child key={segment}>{props.children}</Child>
            </AnimatePresence>
        </>
    );
}

export default ClinentLayout;