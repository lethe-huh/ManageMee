import svgPaths from "./svg-0oc6to7v6k";
import img from "figma:asset/264bae8b22c429b55eb87dc08625934eb074fa6c.png";

function Header() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Header">
      <div className="absolute bg-[#fb6b18] h-[120px] left-0 top-0 w-[402px]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[calc(50%-157px)] not-italic text-[36px] text-white top-[calc(50%-375px)]">Welcome!</p>
    </div>
  );
}

function ButtonPrimaryActive() {
  return (
    <div className="absolute h-[44px] left-[68px] top-[571px] w-[267px]" data-name="Button / Primary / Active">
      <div className="absolute bg-[#fb6b18] inset-0 rounded-[15px]" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[22.73%_39.7%_22.73%_39.33%] justify-center leading-[0] not-italic text-[0px] text-center text-white whitespace-nowrap">
        <p className="font-['Poppins:Bold',sans-serif] leading-[24px] text-[16px]">Sign In</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute left-[151px] size-[100px] top-[215px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" fill="var(--fill-0, white)" id="Ellipse 35" r="50" />
      </svg>
      <img alt="" className="block max-w-none size-full" height="100" src={img} width="100" />
    </div>
  );
}

function IconsFingerprint() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[80px] top-[715px]" data-name="Icons / Fingerprint">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Icons / Fingerprint">
          <path clipRule="evenodd" d={svgPaths.p3a690fc0} fill="var(--fill-0, #FB6B18)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TextFieldDefault() {
  return (
    <div className="absolute inset-[26.09%_0]" data-name="Text field / Default">
      <div className="absolute border border-[#cbcbcb] border-solid inset-0 rounded-[10px]" data-name="Placeholder" />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[12px] not-italic text-[#898989] text-[14px] top-[calc(50%-10px)]">Enter PIN</p>
    </div>
  );
}

function TextFieldLabelActive() {
  return (
    <div className="absolute h-[92px] left-[38px] top-[379px] w-[327px]" data-name="Text field / Label / Active">
      <TextFieldDefault />
    </div>
  );
}

export default function SignInRepeat() {
  return (
    <div className="bg-[#fb6b18] relative size-full" data-name="Sign in (Repeat)">
      <div className="absolute bg-white h-[880px] left-0 top-0 w-[402px]" data-name="Background" />
      <Header />
      <ButtonPrimaryActive />
      <Avatar />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[25px] leading-[28px] left-[calc(50%-72px)] not-italic text-[#343434] text-[20px] top-[325px] w-[144px] whitespace-pre-wrap">Wang Le Ming</p>
      <IconsFingerprint />
      <TextFieldLabelActive />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[24px] leading-[28px] left-[calc(50%-151px)] not-italic text-[#343434] text-[12px] top-[447px] w-[138px] whitespace-pre-wrap">Forget your PIN?</p>
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] h-[24px] leading-[28px] left-[calc(50%-1.5px)] not-italic text-[#343434] text-[12px] text-center top-[355px] w-[103px] whitespace-pre-wrap">Not you?</p>
    </div>
  );
}