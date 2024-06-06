import pendingTrackersIcon from "../../assets/images/content/pendingTrackersIcon.png";
import pedingReviewIcon from "../../assets/images/content/pendingReviewIcon.png";
import { Flex } from "antd";
const TrackerHeader = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Flex gap={30}>
        <div
          style={{
            border: "1px solid lightgrey",
            boxShadow: "10px 10px 15px lightgrey",
            maxWidth: "fit-content",
            padding: "10px 25px 10px 25px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            gap: 20,
          }}
        >
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
        <div
          style={{
            border: "1px solid lightgrey",
            boxShadow: "10px 10px 15px lightgrey",
            maxWidth: "fit-content",
            padding: "10px 25px 10px 25px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            gap: 20,
          }}
        >
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
