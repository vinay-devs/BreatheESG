import pendingTrackersIcon from "../../../assets/images/content/pendingTrackersIcon.png";
import pedingReviewIcon from "../../../assets/images/content/pendingReviewIcon.png";
import { Flex } from "antd";
const TrackerHeader = () => {
  return (
    <div style={{ marginTop: "20px" }} className="tracker">
      <Flex gap={30}>
        <div className="pending-trackers">
          <div>
            <p style={{ color: "grey" }}>PENDING TRACKERS</p>
            <h1>45/60</h1>
          </div>
          <img
            src={pendingTrackersIcon}
            style={{ paddingTop: "10px" }}
            alt=""
          />
        </div>
        <div className="pending-trackers">
          <div>
            <p style={{ color: "grey" }}>PENDING REVIEWS</p>
            <h1>3</h1>
          </div>
          <img src={pedingReviewIcon} style={{ paddingTop: "10px" }} alt="" />
        </div>
      </Flex>
    </div>
  );
};

export default TrackerHeader;
