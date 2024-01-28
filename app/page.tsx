import Image from "next/image";
import About from "@/public/WhatsApp Image 2024-01-28 at 6.33.41 PM.jpeg"
import Product from "@/public/WhatsApp Image 2024-01-28 at 6.38.16 PM.jpeg"
import ProductImage from "@/public/WhatsApp Image 2024-01-28 at 7.05.38 PM.jpeg"
export default function Home() {
  return (
<div className="w-full flex flex-col gap-10 " >
  <div className="w-full text-center font-semibold text-2xl  ">ابحث عن أفضل العلامات التجارية! <span className=" text-green-700  font-bold text-2xl">TummyTime</span></div>
  
  
  <div className=" flex flex-col gap-3">

  <div className=" flex justify-center items-center">
    {/* <div className=" font-body text-white text-2xl  bg-green-800 px-4">
        About
    </div> */}
    <Image src={About} className=" w-[40%]" alt={""}/>
    
    </div>
    <div className="font-semibold   text-center " dir="rtl">
    <span className=" text-green-700  font-bold text-xl">TummyTime</span>

    هي علامة تجارية لبنانية تنتج طعام الأطفال المحلي المصدر بمجموعة متنوعة من النكهات الموسمية الميسورة التكلفة. تقدم مرطباناتنا خيار وجبة غذائية مغذية ولذيذة لضمان أن صغاركم في أفضل حال يمكنهم الوصول إليه.

    </div>
  </div>
  
  

  <div className=" flex flex-col gap-3">

<div className=" flex flex-col justify-center items-center gap-10 overflow-hidden">
  
    <Image src={Product} className=" w-[40%]" alt={""}/>
      
      <div className="flex flex-col justify-center items-center gap-4">


      <div className=" w-full shadow-md flex gap-2 h-28 overflow-hidden bg-white    ">
 <Image src={ProductImage} className=" w-[40%]" alt={""}/>
    <div className=" flex flex-col justify-start items-start gap-2" >
      <div className=" text-green-700 font-semibold text-md">
          بطاطا محروسة
      </div>
      <div className=" text-sm opacity-75">
      تأكد من أنك وعائلتك تحصلون على جزء واحد على الأقل من الفاكهة أو مزيج الفاكهة يوميًا! مزيج الفاكهة مليء بالفيتامينات والألياف والعناصر الغذائية. اترك مزيجك المفضل من الفواكه أدناه.
      </div>

    </div>
 </div>

 <div className=" w-full shadow-md flex gap-2 h-28 overflow-hidden bg-white    ">
 <Image src={ProductImage} className=" w-[40%]" alt={""}/>
    <div className=" flex flex-col justify-start items-start gap-2" >
      <div className=" text-green-700 font-semibold text-md">
          بطاطا محروسة
      </div>
      <div className=" text-sm opacity-75">
      تأكد من أنك وعائلتك تحصلون على جزء واحد على الأقل من الفاكهة أو مزيج الفاكهة يوميًا! مزيج الفاكهة مليء بالفيتامينات والألياف والعناصر الغذائية. اترك مزيجك المفضل من الفواكه أدناه.
      </div>

    </div>
 </div>

 <div className=" w-full shadow-md flex gap-2 h-28 overflow-hidden bg-white    ">
 <Image src={ProductImage} className=" w-[40%]" alt={""}/>
    <div className=" flex flex-col justify-start items-start gap-2" >
      <div className=" text-green-700 font-semibold text-md">
          بطاطا محروسة
      </div>
      <div className=" text-sm opacity-75">
      تأكد من أنك وعائلتك تحصلون على جزء واحد على الأقل من الفاكهة أو مزيج الفاكهة يوميًا! مزيج الفاكهة مليء بالفيتامينات والألياف والعناصر الغذائية. اترك مزيجك المفضل من الفواكه أدناه.
      </div>

    </div>
 </div>
 
  

 
      </div>
 
  </div>
  
</div>
</div>
  );
}
