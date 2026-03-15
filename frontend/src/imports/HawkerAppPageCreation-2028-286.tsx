import svgPaths from "./svg-eselvyjqum";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[-2.6px]">Analytics</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#6a7282] text-[16px] top-[-2.2px]">{`Track costs & profits`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[128px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-b-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[0.8px] pt-[48px] px-[20px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Revenue Today</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#00a63e] text-[24px] top-[-2px] w-[82px] whitespace-pre-wrap">$721.50</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.975px] items-start left-0 top-0 w-[341.6px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Total Cost</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#e7000b] text-[24px] top-[-2px] w-[87px] whitespace-pre-wrap">$343.40</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.975px] items-start left-[357.6px] top-0 w-[341.6px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Profit Today</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#155dfc] text-[24px] top-[-2px] w-[82px] whitespace-pre-wrap">$378.10</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.975px] items-start left-0 top-[67.98px] w-[341.6px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Avg Margin</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#101828] text-[24px] top-[-2px] w-[67px] whitespace-pre-wrap">49.2%</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[51.975px] items-start left-[357.6px] top-[67.98px] w-[341.6px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[119.95px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[152.75px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[16px] px-[20px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-2.2px]">Performance</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.27%_0.72%_15.91%_9.3%]" data-name="Group">
      <div className="absolute inset-[-0.28%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 629 181">
          <g id="Group">
            <path d="M0 180.5H629" id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
            <path d="M0 135.5H629" id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
            <path d="M0 90.5H629" id="Vector_3" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
            <path d="M0 45.5H629" id="Vector_4" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
            <path d="M0 0.5H629" id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[2.27%_0.72%_15.91%_9.3%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 630 180">
        <g id="Group">
          <path d="M79.125 0V180" id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
          <path d="M236.375 0V180" id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
          <path d="M393.625 0V180" id="Vector_3" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
          <path d="M550.875 0V180" id="Vector_4" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
          <path d="M0.5 0V180" id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
          <path d="M629.5 0V180" id="Vector_6" stroke="var(--stroke-0, #F0F0F0)" strokeDasharray="3 3" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.27%_0.72%_15.91%_9.3%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[84.09%_75.02%_8.14%_16.11%]" data-name="Group">
      <div className="absolute inset-[84.09%_79.45%_13.18%_20.55%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.41%_75.02%_8.14%_16.11%] leading-[normal] not-italic text-[#666] text-[10px] text-center">Chicken Rice</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[84.09%_51.31%_8.14%_37.39%]" data-name="Group">
      <div className="absolute inset-[84.09%_56.96%_13.18%_43.04%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.41%_51.31%_8.14%_37.39%] leading-[normal] not-italic text-[#666] text-[10px] text-center">Char Kway Teow</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[84.09%_32.46%_8.14%_63.54%]" data-name="Group">
      <div className="absolute inset-[84.09%_34.46%_13.18%_65.54%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.41%_32.46%_8.14%_63.54%] leading-[normal] not-italic text-[#666] text-[10px] text-center">Laksa</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[84.09%_8.03%_8.14%_84.1%]" data-name="Group">
      <div className="absolute inset-[84.09%_11.96%_13.18%_88.04%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.41%_8.03%_8.14%_84.1%] leading-[normal] not-italic text-[#666] text-[10px] text-center">Nasi Lemak</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[84.09%_8.03%_8.14%_16.11%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[84.09%_0.72%_8.14%_9.3%]" data-name="Group">
      <div className="absolute inset-[84.09%_0.72%_15.91%_9.3%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 629 1">
            <path d="M0 0.5H629" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[81.16%_90.7%_13.39%_7.15%]" data-name="Group">
      <div className="absolute inset-[84.09%_90.7%_15.91%_8.44%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.16%_91.85%_13.39%_7.15%] leading-[normal] not-italic text-[#666] text-[10px] text-right">0</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[60.7%_90.7%_33.84%_6.29%]" data-name="Group">
      <div className="absolute inset-[63.64%_90.7%_36.36%_8.44%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[60.7%_91.85%_33.84%_6.29%] leading-[normal] not-italic text-[#666] text-[10px] text-right">65</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[40.25%_90.7%_54.3%_5.58%]" data-name="Group">
      <div className="absolute inset-[43.18%_90.7%_56.82%_8.44%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.25%_91.85%_54.3%_5.58%] leading-[normal] not-italic text-[#666] text-[10px] text-right">130</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[19.8%_90.7%_74.75%_5.72%]" data-name="Group">
      <div className="absolute inset-[22.73%_90.7%_77.27%_8.44%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.8%_91.85%_74.75%_5.72%] leading-[normal] not-italic text-[#666] text-[10px] text-right">195</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[0.48%_90.7%_94.07%_5.44%]" data-name="Group">
      <div className="absolute inset-[2.27%_90.7%_97.73%_8.44%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.48%_91.85%_94.07%_5.44%] leading-[normal] not-italic text-[#666] text-[10px] text-right">260</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[0.48%_90.7%_13.39%_5.44%]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[0.48%_90.7%_13.39%_5.44%]" data-name="Group">
      <div className="absolute inset-[2.27%_90.7%_15.91%_9.3%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 180">
            <path d="M0.5 0V180" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group10 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[6.21%_82.87%_15.91%_11.55%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 171.346">
        <g id="Group">
          <path d={svgPaths.p122d3480} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[23.67%_60.38%_15.91%_34.05%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 132.923">
        <g id="Group">
          <path d={svgPaths.p2d7cd280} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[26.82%_37.88%_15.91%_56.54%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 126">
        <g id="Group">
          <path d={svgPaths.p7c5cf00} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[52.62%_15.38%_15.91%_79.04%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 69.2308">
        <g id="Group">
          <path d={svgPaths.p10ae0a00} fill="var(--fill-0, #10B981)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[6.21%_15.38%_15.91%_11.55%]" data-name="Group">
      <Group18 />
      <Group19 />
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[6.21%_15.38%_15.91%_11.55%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[52.94%_76.72%_15.91%_17.7%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 68.5385">
        <g id="Group">
          <path d={svgPaths.p120aac00} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[53.88%_54.22%_15.91%_40.2%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 66.4615">
        <g id="Group">
          <path d={svgPaths.pc990500} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[59.42%_31.73%_15.91%_62.69%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 54.2769">
        <g id="Group">
          <path d={svgPaths.p19119200} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[62.06%_9.23%_15.91%_85.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 48.4615">
        <g id="Group">
          <path d={svgPaths.p3c76cc00} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[52.94%_9.23%_15.91%_17.7%]" data-name="Group">
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[52.94%_9.23%_15.91%_17.7%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[37.36%_70.57%_15.91%_23.85%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 102.808">
        <g id="Group">
          <path d={svgPaths.p897da80} fill="var(--fill-0, #3B82F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[53.88%_48.07%_15.91%_46.35%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 66.4615">
        <g id="Group">
          <path d={svgPaths.pc990500} fill="var(--fill-0, #3B82F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[51.49%_25.58%_15.91%_68.84%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 71.7231">
        <g id="Group">
          <path d={svgPaths.p33c1b1f0} fill="var(--fill-0, #3B82F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[74.65%_3.08%_15.91%_91.34%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 20.7692">
        <g id="Group">
          <path d={svgPaths.p26383100} fill="var(--fill-0, #3B82F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[37.36%_3.08%_15.91%_23.85%]" data-name="Group">
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[37.36%_3.08%_15.91%_23.85%]" data-name="Group">
      <Group29 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[220px] left-0 overflow-clip top-0 w-[699px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group9 />
      <Group16 />
      <Group22 />
      <Group28 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="BarChart">
      <Surface />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[292px] items-start left-0 pt-[16px] px-[20px] top-0 w-[739.2px]" data-name="Container">
      <Heading1 />
      <BarChart />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[304.45px] size-[16px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ff6900] h-[56px] left-[20px] rounded-[14px] top-[308px] w-[699.2px]" data-name="Button">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[361.95px] text-[16px] text-center text-white top-[13.8px]">Add Dish</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-2.2px]">All Dishes</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[12px] px-[20px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-2.2px]">Chicken Rice</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px] w-[89px] whitespace-pre-wrap">Sold today: 45</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading3 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#dcfce7] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[49.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#008236] text-[12px]">Great</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[46px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Text />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Selling Price</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">5.5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <NumberInput />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-0 top-0 w-[343.6px]" data-name="Container">
      <Paragraph10 />
      <Container16 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Cost</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput1() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">2.2</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <NumberInput1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-[355.6px] top-0 w-[343.6px]" data-name="Container">
      <Paragraph11 />
      <Container18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[63.987px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.775px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[127px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Profit Margin: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#00a63e]">60.0%</span>
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[110px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Revenue: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#101828]">$247.50</span>
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[28.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.8px] relative size-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[195.588px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[0.8px] pt-[16px] px-[20px] relative size-full">
        <Container12 />
        <Container14 />
        <Container19 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-2.2px]">Char Kway Teow</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px] w-[89px] whitespace-pre-wrap">Sold today: 32</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading4 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#dcfce7] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[49.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#008236] text-[12px]">Great</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[46px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Text3 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Selling Price</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput2() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">6</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <NumberInput2 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-0 top-0 w-[343.6px]" data-name="Container">
      <Paragraph13 />
      <Container27 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Cost</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput3() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <NumberInput3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-[355.6px] top-0 w-[343.6px]" data-name="Container">
      <Paragraph14 />
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[63.987px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.738px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[127px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Profit Margin: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#00a63e]">50.0%</span>
        </p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.275px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[108px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Revenue: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#101828]">$192.00</span>
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[28.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.8px] relative size-full">
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[195.588px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[0.8px] pt-[16px] px-[20px] relative size-full">
        <Container23 />
        <Container25 />
        <Container30 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-2.2px]">Laksa</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px] w-[89px] whitespace-pre-wrap">Sold today: 28</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading5 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#dcfce7] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[49.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#008236] text-[12px]">Great</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[46px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Text6 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Selling Price</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput4() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">6.5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <NumberInput4 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-0 top-0 w-[343.6px]" data-name="Container">
      <Paragraph16 />
      <Container38 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Cost</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput5() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">2.8</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <NumberInput5 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-[355.6px] top-0 w-[343.6px]" data-name="Container">
      <Paragraph17 />
      <Container40 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[63.987px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.825px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[127px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Profit Margin: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#00a63e]">56.9%</span>
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.225px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[108px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Revenue: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#101828]">$182.00</span>
        </p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[28.8px] items-center justify-between pt-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[195.588px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[0.8px] pt-[16px] px-[20px] relative size-full">
        <Container34 />
        <Container36 />
        <Container41 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-[-2.2px]">Nasi Lemak</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px] w-[89px] whitespace-pre-wrap">Sold today: 20</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading6 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#ffe2e2] h-[23.988px] relative rounded-[26843500px] shrink-0 w-[42.112px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#c10007] text-[12px]">Low</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[46px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Text9 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Selling Price</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput6() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <NumberInput6 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-0 top-0 w-[343.6px]" data-name="Container">
      <Paragraph19 />
      <Container49 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap">Cost</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-1.2px]">$</p>
      </div>
    </div>
  );
}

function NumberInput7() {
  return (
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[10px]" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px]">3.5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <NumberInput7 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[63.987px] items-start left-[355.6px] top-0 w-[343.6px]" data-name="Container">
      <Paragraph20 />
      <Container51 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[63.987px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.738px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[127px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Profit Margin: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#e7000b]">30.0%</span>
        </p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.225px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[0] left-0 text-[#6a7282] text-[0px] text-[14px] top-[-1.2px] w-[108px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Revenue: `}</span>
          <span className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] text-[#101828]">$100.00</span>
        </p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[28.8px] items-center justify-between pt-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[194.788px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] px-[20px] relative size-full">
        <Container45 />
        <Container47 />
        <Container52 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[830.35px] items-start left-0 top-[388px] w-[739.2px]" data-name="Container">
      <Container10 />
      <Container11 />
      <Container22 />
      <Container33 />
      <Container44 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[1314.35px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Button />
      <Container9 />
    </div>
  );
}

function PQ() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[0.8px] h-[1603.9px] items-start relative shrink-0 w-full" data-name="pQ">
      <Container />
      <Container1 />
      <Container7 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[841.6px] items-start left-0 top-0 w-[739.2px]" data-name="Body">
      <PQ />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3bfee9c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 22V12" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.29 7L12 12L20.71 7" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7.5 4.27L16.5 9.42" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[49.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-center">Inventory</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[67.988px] items-center justify-center left-0 top-[-0.8px] w-[369.6px]" data-name="Button">
      <Icon1 />
      <Text12 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p36c5af80} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18 17V9" id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 17V5" id="Vector_3" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 17V14" id="Vector_4" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[48.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ff6900] text-[12px] text-center">Analytics</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[67.988px] items-center justify-center left-[369.6px] top-[-0.8px] w-[369.6px]" data-name="Button">
      <Icon2 />
      <Text13 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-white border-black border-solid border-t-[0.8px] h-[67.988px] left-0 top-[773.61px] w-[739.2px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function HawkerAppPageCreation() {
  return (
    <div className="bg-white relative size-full" data-name="Hawker app page creation">
      <Body />
      <Container55 />
    </div>
  );
}