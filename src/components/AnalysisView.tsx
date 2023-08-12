import { GptApiResponse } from "@/types/api_calls";
import { useEffect, useState } from "react";
import AnalysisSubTitle from "./AnalysisSubTitle";
import AnalysisParagraph from "./AnalysisParagraph";
import { HiOutlineLightningBolt } from "react-icons/hi";
import SubCard from "./SubCard";
import Card from "./Card";

const AnalysisView: React.FC<{ data: GptApiResponse }> = ({ data }) => {
  const [score, setScore] = useState<number>();
  useEffect(() => {
    const totalScore =
      (data.score.clarity +
        data.score.relevance +
        data.score.achievements +
        data.score.keywords) /
      Object.keys(data.score).length;
    setScore(totalScore);
  }, [data]);
  return (
    <Card>
      <h5 className="mb-8 flex items-center text-3xl font-extrabold leading-tight text-neutral-100">
        <span className="inline-block mr-2 ">
          <HiOutlineLightningBolt />
        </span>
        Analysis:
      </h5>
      <SubCard>
        <AnalysisSubTitle title="Clarity"></AnalysisSubTitle>
        <AnalysisParagraph text={data.clarity}></AnalysisParagraph>
        <div className="w-full mb-2 h-2 bg-gray-500 rounded-full">
          <div
            className="h-full text-center text-xs text-white bg-blue-400/80 rounded-full"
            style={{ width: data.score.clarity + "%" }}
          ></div>
        </div>
      </SubCard>

      <SubCard>
        <AnalysisSubTitle title="Relevance"></AnalysisSubTitle>
        <AnalysisParagraph text={data.relevance}></AnalysisParagraph>
        <div className="w-full mb-2 h-2 bg-gray-500 rounded-full">
          <div
            className="h-full text-center text-xs text-white bg-green-400/80 rounded-full"
            style={{ width: data.score.relevance + "%" }}
          ></div>
        </div>
      </SubCard>
      <SubCard>
        <AnalysisSubTitle title="Achievements"></AnalysisSubTitle>
        <AnalysisParagraph text={data.achievements}></AnalysisParagraph>
        <div className="w-full mb-2 h-2 bg-gray-500 rounded-full">
          <div
            className="h-full text-center text-xs text-white bg-yellow-400/80 rounded-full"
            style={{ width: data.score.achievements + "%" }}
          ></div>
        </div>
      </SubCard>
      <SubCard last>
        <AnalysisSubTitle title="Keywords"></AnalysisSubTitle>
        <AnalysisParagraph text={data.keywords}></AnalysisParagraph>
        <div className="w-full mb-2 h-2 bg-gray-500 rounded-full">
          <div
            className="h-full text-center text-xs text-white bg-fuchsia-400/80 rounded-full"
            style={{ width: data.score.keywords + "%" }}
          ></div>
        </div>
      </SubCard>
    </Card>
  );
};

export default AnalysisView;
