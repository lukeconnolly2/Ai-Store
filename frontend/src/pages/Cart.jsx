import {motion} from "framer-motion"
export default function Cart() {
  return (
    <motion.main
    className="main__container"
    initial={{ opacity: 0 }}
     animate={{ opacity: 100 }}
     exit={{ opacity: 0 }}
     transition={{ duration: .1 }}
    >
      <div>Cart</div>
    </motion.main>
  )
}
