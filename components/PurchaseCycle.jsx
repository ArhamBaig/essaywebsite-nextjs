"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const PurchaseCycle = () => {
  return (
    <div className="bg-gray-300 py-32 flex flex-col justify-center items-center">   {" "}
    <h2 className=" text-black capitalize text-center ">
      Purchase Lifecycle
    </h2>
    <div className=" w-20 h-[1px] bg-orange-600 rounded-full my-6 flex items-center justify-center"></div>

      <div className="container mx-auto flex ">
     
        <div className="flex flex-col">
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PurchaseCard />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PurchaseCard />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PurchaseCard />
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="flex flex-col">
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PurchaseCard />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PurchaseCard />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <PurchaseCard />
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

const PurchaseCard = () => {
  return (
    <div className="p-5 hover:shadow-lg transition-all w-full max-w-3xl mb-4 bg-white rounded">
      <h2>Upload Task Sheet</h2>
      <p>
        you have to upload you have to upload you have to upload you have to
        upload you have to upload you have to upload{" "}
      </p>
    </div>
  );
};

export default PurchaseCycle;
