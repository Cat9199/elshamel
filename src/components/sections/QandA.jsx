import learningImg from "../../assets/Learning.svg";
import HomeAccordion from "../HomeAccordion";
export default function QandA() {
  return (
    <>
      <h1 className="text-center gradient-text text-3xl font-bold mt-20">
        لماذا تدرس في منصة الشامل؟
      </h1>
      <div className="max-w-[1300px] m-auto max-md:px-5 flex max-md:flex-col gap-5 ">
        <div className="w-1/2 max-md:w-full grid place-items-center">
          <img src={learningImg} alt="" className="max-w-[450px]" />
        </div>
        <div className="w-1/2 max-md:w-full flex flex-col justify-center items-center gap-5">
          <HomeAccordion
            title={"تعلم مرن"}
            text={
              "تستطيع التعلّم في أي وقت تريده وفي أي مكان ومن أي جهاز إلكتروني"
            }
          />
          <HomeAccordion
            title={"مجتمع مهني تفاعلي"}
            text={
              "تفاعل مستمر مع مدرب البرنامج وباقي المتدربين على صفحة النقاشات بالمنصة"
            }
          />
          <HomeAccordion
            title={"محتوى في جميع التخصصات"}
            text={
              "نلبي احتياجك التدريبي بعرض العديد من الدورات والمؤهلات المهنية المختلفة، حتى تتوافق مع احتياجك"
            }
          />
          <HomeAccordion
            title={"تميز وجودة"}
            text={
              "مدربون متميزون بمشاركة جهات أكاديمية تعليمية ورائدة بهدف تقديم محتوى عالي الجودة بمعايير عالمية"
            }
          />
        </div>
      </div>
    </>
  );
}
