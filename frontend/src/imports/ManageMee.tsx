import svgPaths from "./svg-nimgz0i96c";

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-0 w-[340.267px]" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">{`Today's Forecast`}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p34574300} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M16 14V20" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M8 14V20" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M12 16V22" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-[233.783px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px] w-[234px] whitespace-pre-wrap">Tuesday, 8 Feb 2026 • Rainy</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-0 top-[40px] w-[340.267px]" data-name="Container">
      <Icon />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[14px] text-white whitespace-pre-wrap">Predicted Sales</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[48px] left-0 text-[48px] text-white top-[-5.53px] w-[111px] whitespace-pre-wrap">$850</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 opacity-90 top-0 w-[128.517px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white">vs Average Tuesday</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[128.517px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-white top-[-2px] w-[56px] whitespace-pre-wrap">$700</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[52px] relative shrink-0 w-[128.517px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-[82px] text-[30px] text-right text-white top-[-3.13px] w-[82px] whitespace-pre-wrap">+21%</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[16px] min-h-px min-w-px relative text-[12px] text-right text-white whitespace-pre-wrap">increase</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[68px] relative rounded-[10px] shrink-0 w-[113.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[16px] relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[192px] items-start left-0 pt-[20px] px-[20px] rounded-[10px] top-[84px] w-[340.267px]" data-name="Container" style={{ backgroundImage: "linear-gradient(150.566deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 100%)" }}>
      <Paragraph1 />
      <Paragraph2 />
      <Container4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3a0993c0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p1adb0100} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[174.417px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px]">High Confidence</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[28px] w-[174.417px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Based on 12 weeks of data</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[48px] relative shrink-0 w-[174.417px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex gap-[12px] h-[82.133px] items-center left-0 pl-[17.067px] pr-[1.067px] py-[1.067px] rounded-[10px] top-[288px] w-[340.267px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#00a63e] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon1 />
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[370.133px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container2 />
      <Container3 />
      <Container7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">Dish Breakdown</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-1.93px]">Recommended prep quantities for today</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[239.983px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px]">Roasted Chicken Rice</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#00a63e] text-[14px] top-[-2px] w-[39px] whitespace-pre-wrap">+12%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[239.98px] top-[4px] w-[66.15px]" data-name="Container">
      <Icon2 />
      <Text />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container13 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[14.93px] w-[34.167px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Prep:</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[36px] left-[42.17px] top-0 w-[34.517px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[30px] top-[-3.13px]">80</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[84.68px] top-[14.93px] w-[39.317px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">plates</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f9fafb] h-[106.133px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[1.067px] pt-[17.067px] px-[17.067px] relative size-full">
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[248.033px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px]">Char Siew Noodles</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#00a63e] text-[14px] top-[-2px] w-[31px] whitespace-pre-wrap">+8%</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[248.03px] top-[4px] w-[58.1px]" data-name="Container">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container17 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[14.93px] w-[34.167px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Prep:</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[36px] left-[42.17px] top-0 w-[34.517px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[30px] top-[-3.13px]">65</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[84.68px] top-[14.93px] w-[39.317px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">plates</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f9fafb] h-[106.133px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[1.067px] pt-[17.067px] px-[17.067px] relative size-full">
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[286.133px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px]">Wonton Mee</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-1.04px_-8.93%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 2.08333">
              <path d="M1.04167 1.04167H12.7083" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex items-center left-[286.13px] size-[20px] top-[4px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container21 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[14.93px] w-[34.167px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Prep:</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[36px] left-[42.17px] top-0 w-[34.517px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[30px] top-[-3.13px]">55</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[84.68px] top-[14.93px] w-[39.317px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">plates</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f9fafb] h-[106.133px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[1.067px] pt-[17.067px] px-[17.067px] relative size-full">
        <Container20 />
        <Container22 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[252.267px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px]">Curry Laksa</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p145ec80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p548e880} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#e7000b] text-[14px] top-[-2px] w-[26px] whitespace-pre-wrap">-5%</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[252.27px] top-[4px] w-[53.867px]" data-name="Container">
      <Icon5 />
      <Text2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container25 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[14.93px] w-[34.167px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Prep:</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[36px] left-[42.17px] top-0 w-[34.517px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[30px] top-[-3.13px]">45</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[84.68px] top-[14.93px] w-[39.317px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">plates</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f9fafb] h-[106.133px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[1.067px] pt-[17.067px] px-[17.067px] relative size-full">
        <Container24 />
        <Container26 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[239.983px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px]">Fried Hokkien Mee</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#00a63e] text-[14px] top-[-2px] w-[39px] whitespace-pre-wrap">+15%</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[239.98px] top-[4px] w-[66.15px]" data-name="Container">
      <Icon6 />
      <Text3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container29 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[14.93px] w-[34.167px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Prep:</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[36px] left-[42.17px] top-0 w-[34.517px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#f54900] text-[30px] top-[-3.13px]">40</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[84.68px] top-[14.93px] w-[39.317px]" data-name="Paragraph">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">plates</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f9fafb] h-[106.133px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[1.067px] pt-[17.067px] px-[17.067px] relative size-full">
        <Container28 />
        <Container30 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[562.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container15 />
      <Container19 />
      <Container23 />
      <Container27 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[642.667px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph9 />
      <Container10 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px relative text-[#101828] text-[20px] whitespace-pre-wrap">Historical Trend</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-1.93px]">{`Last 4 Tuesdays vs Today's Prediction`}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.79%_1.63%_12.5%_21.24%]" data-name="Group">
      <div className="absolute inset-[-0.21%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 241">
          <g id="Group">
            <path d="M0 240.5H236" id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M0 180.5H236" id="Vector_2" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M0 120.5H236" id="Vector_3" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M0 60.5H236" id="Vector_4" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M0 0.5H236" id="Vector_5" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.79%_1.63%_12.5%_21.24%]" data-name="Group">
      <div className="absolute inset-[0_-0.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 240">
          <g id="Group">
            <path d="M24.1 0V240" id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M71.3 0V240" id="Vector_2" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M118.5 0V240" id="Vector_3" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M165.7 0V240" id="Vector_4" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M212.9 0V240" id="Vector_5" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M0.5 0V240" id="Vector_6" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
            <path d="M236.5 0V240" id="Vector_7" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.79%_1.63%_12.5%_21.24%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[87.5%_65%_6.14%_22.91%]" data-name="Group">
      <div className="absolute inset-[87.5%_71.05%_10.36%_28.95%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[89.22%_65%_6.14%_22.91%] leading-[normal] not-italic text-[#374151] text-[11px] text-center">28 Jan</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[87.5%_50.72%_6.14%_39.48%]" data-name="Group">
      <div className="absolute inset-[87.5%_55.62%_10.36%_44.38%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[89.22%_50.72%_6.14%_39.48%] leading-[normal] not-italic text-[#374151] text-[11px] text-center">4 Feb</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[87.5%_34.8%_6.14%_54.41%]" data-name="Group">
      <div className="absolute inset-[87.5%_40.2%_10.36%_59.8%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[89.22%_34.8%_6.14%_54.41%] leading-[normal] not-italic text-[#374151] text-[11px] text-center">11 Feb</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[87.5%_19.05%_6.14%_69.51%]" data-name="Group">
      <div className="absolute inset-[87.5%_24.77%_10.36%_75.23%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[89.22%_19.05%_6.14%_69.51%] leading-[normal] not-italic text-[#374151] text-[11px] text-center">18 Feb</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[87.5%_3.95%_6.14%_85.26%]" data-name="Group">
      <div className="absolute inset-[87.5%_9.35%_10.36%_90.65%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[89.22%_3.95%_6.14%_85.26%] leading-[normal] not-italic text-[#374151] text-[11px] text-center">Today</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[87.5%_3.95%_6.14%_22.91%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[87.5%_1.63%_6.14%_21.24%]" data-name="Group">
      <div className="absolute inset-[87.5%_1.63%_12.5%_21.24%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
            <path d="M0 0.5H236" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[84.74%_78.76%_9.91%_15.69%]" data-name="Group">
      <div className="absolute inset-[87.5%_78.76%_12.5%_19.28%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[84.74%_81.37%_9.91%_15.69%] leading-[normal] not-italic text-[#374151] text-[12px] text-right">0</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[63.31%_78.76%_31.34%_10.78%]" data-name="Group">
      <div className="absolute inset-[66.07%_78.76%_33.93%_19.28%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[63.31%_81.37%_31.34%_10.78%] leading-[normal] not-italic text-[#374151] text-[12px] text-right">250</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[41.88%_78.76%_52.76%_10.46%]" data-name="Group">
      <div className="absolute inset-[44.64%_78.76%_55.36%_19.28%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[41.88%_81.37%_52.76%_10.46%] leading-[normal] not-italic text-[#374151] text-[12px] text-right">500</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[20.45%_78.76%_74.19%_10.78%]" data-name="Group">
      <div className="absolute inset-[23.21%_78.76%_76.79%_19.28%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[20.45%_81.37%_74.19%_10.78%] leading-[normal] not-italic text-[#374151] text-[12px] text-right">750</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[0.45%_78.76%_94.19%_8.5%]" data-name="Group">
      <div className="absolute inset-[1.79%_78.76%_98.21%_19.28%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0.45%_81.37%_94.19%_8.5%] leading-[normal] not-italic text-[#374151] text-[12px] text-right">1000</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0.45%_78.76%_9.91%_8.5%]" data-name="Group">
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[0.45%_78.76%_9.91%_8.5%]" data-name="Group">
      <div className="absolute inset-[1.79%_78.76%_12.5%_21.24%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 240">
            <path d="M0.5 0V240" id="Vector" stroke="var(--stroke-0, #374151)" />
          </svg>
        </div>
      </div>
      <Group11 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[25.79%_64.71%_12.5%_22.22%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 172.8">
        <g id="Group">
          <path d={svgPaths.p84e0180} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[29.21%_49.28%_12.5%_37.65%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 163.2">
        <g id="Group">
          <path d={svgPaths.p27c8e000} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[26.64%_33.86%_12.5%_53.07%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 170.4">
        <g id="Group">
          <path d={svgPaths.p30411280} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[27.93%_18.43%_12.5%_68.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 166.8">
        <g id="Group">
          <path d={svgPaths.p3beca400} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[14.64%_3.01%_12.5%_83.92%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 204">
        <g id="Group">
          <path d={svgPaths.pa0bfd00} fill="var(--fill-0, #EA580C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[14.64%_3.01%_12.5%_22.22%]" data-name="Group">
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[14.64%_3.01%_12.5%_22.22%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[14.64%_3.01%_12.5%_22.22%]" data-name="Group">
      <Group18 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[280px] left-0 overflow-clip top-0 w-[306px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group10 />
      <Group17 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[280px] relative shrink-0 w-full" data-name="BarChart">
      <Surface />
    </div>
  );
}

function Container35() {
  return <div className="bg-[#99a1af] rounded-[4px] shrink-0 size-[16px]" data-name="Container" />;
}

function Paragraph26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[62.633px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Historical</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.633px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container35 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container37() {
  return <div className="bg-[#f54900] rounded-[4px] shrink-0 size-[16px]" data-name="Container" />;
}

function Paragraph27() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">{`Today's forecast`}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[129.783px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container37 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pr-[0.017px] relative size-full">
          <Container34 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#f9fafb] h-[350.133px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[1.067px] pl-[17.067px] pr-[17.2px] pt-[17.067px] relative size-full">
        <BarChart />
        <Container33 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[430.133px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph25 />
      <Container32 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.87px]">💡 Key Insights</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#101828] text-[14px] top-[-2px] w-[293px] whitespace-pre-wrap">• Rainy weather typically reduces foot traffic by 10%</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#101828] text-[14px] top-[-2px] w-[297px] whitespace-pre-wrap">• Public holiday expected to increase sales by 20%</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#101828] text-[14px] top-[-2px] w-[275px] whitespace-pre-wrap">• Roasted Chicken Rice trending up - prep extra portions</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">• Consider reducing Curry Laksa prep by 5%</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[152px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#eff6ff] h-[222.133px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[1.067px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[1.067px] pt-[17.067px] px-[17.067px] relative size-full">
        <Heading9 />
        <List />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[1946.133px] items-start left-0 pt-[113.067px] px-[16px] top-0 w-[372.267px]" data-name="Container">
      <Container1 />
      <Container9 />
      <Container31 />
      <Container38 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[64px] relative shrink-0 w-[292.267px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#101828] text-[24px] top-[-2px] w-[207px] whitespace-pre-wrap">{`Sales Prediction & Analytics`}</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-10.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 19.3333">
            <path d={svgPaths.pf83c080} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-10.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 19.3333">
            <path d={svgPaths.p195078c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-white content-stretch flex h-[97.067px] items-center justify-between left-0 pb-[1.067px] px-[16px] top-0 w-[372.267px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.067px] border-solid inset-0 pointer-events-none" />
      <Heading />
      <Button />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[372.267px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Container39 />
      </div>
    </div>
  );
}

function Pq() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[852.267px] items-start left-0 pb-[-1173.867px] top-0 w-[372.267px]" data-name="pq">
      <MainContent />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#f54900] text-[12px] text-center">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[80px] items-center justify-center left-0 top-0 w-[74.45px]" data-name="Button">
      <Icon8 />
      <Text4 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3bfee9c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M12 22V12" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M3.29 7L12 12L20.71 7" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M7.5 4.27L16.5 9.42" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Stock</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[80px] items-center justify-center left-[74.45px] top-0 w-[74.45px]" data-name="Button">
      <Icon9 />
      <Text5 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p309ae800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M6 17H18" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[32.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Menu</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[80px] items-center justify-center left-[148.9px] top-0 w-[74.45px]" data-name="Button">
      <Icon10 />
      <Text6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Prices</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[80px] items-center justify-center left-[223.35px] top-0 w-[74.45px]" data-name="Button">
      <Icon11 />
      <Text7 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38ffec00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[45.95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#4a5565] text-[12px] text-center">Settings</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[80px] items-center justify-center left-[297.8px] top-0 w-[74.467px]" data-name="Button">
      <Icon12 />
      <Text8 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[81.067px] items-start left-0 pt-[1.067px] top-[771.2px] w-[372.267px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.067px] inset-0 pointer-events-none" />
      <Container40 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[-20000px] w-[20.717px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#0a0a0a] text-[12px]">250</p>
    </div>
  );
}

export default function ManageMee() {
  return (
    <div className="bg-white relative size-full" data-name="ManageMee">
      <Pq />
      <Navigation />
      <Text9 />
    </div>
  );
}