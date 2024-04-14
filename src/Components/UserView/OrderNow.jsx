import { Button } from "@chakra-ui/react";

export const OrderNow = () => {
  return (
    <>
      <div className="flex w-full h-[50%] max-[400px]:flex-col mt-4">
        <div className="w-[50vw] max-[400px]:w-full max-[840px]:pb-[1rem] max-[400px]:p-5 pt-20 pb-[2.75rem] m-auto text-center bg-orange-500">
            <h2 className="text-[1.5rem] font-semibold font-mono">Are You Craving , Order Now 👇👇</h2>
            <Button bg={'black'} color={'white'} _hover={{color:'black',background:'white'}} fontWeight={'bold'} marginTop={'2'}>Order Now</Button>
        </div>
        <div>
          <img className="w-[50vw] max-[400px]:w-full h-52" src="Pizza.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
