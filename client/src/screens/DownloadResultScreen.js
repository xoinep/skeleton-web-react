import { List, Divider, Alert, Button } from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";
const DownloadResultScreen = ({ showResult }) => {
  const urls = useStoreState((state) => state.model.urls);
  const getAndSetPcbToken = useStoreActions(
    (actions) => actions.model.getAndSetPcbToken
  );
  const pcbToken = useStoreState((state) => state.model.pcbToken);
  const getPageSourceByPcbToken = useStoreActions(
    (actions) => actions.model.getPageSourceByPcbToken
  );
  useEffect(() => {
    if (pcbToken != null) {
      getPageSourceByPcbToken({ pcbToken: pcbToken });
    }
  }, [pcbToken]);

  if (showResult) {
    if (urls?.length > 0) {
      return (
        <>
          <Divider orientation="left">Available videos to download</Divider>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 6,
              xxl: 2,
            }}
            dataSource={urls}
            renderItem={(item) => (
              <List.Item>
                <video controls>
                  <source src={item} type="video/mp4" />
                </video>
              </List.Item>
            )}
          />
        </>
      );
    } else {
      if (urls == null) {
        return (
          <>
            <Alert
              message="Not lucky yet!!!"
              showIcon
              description="We haven't found the video yet. Do you want to give us another chance by doing different search method? "
              type="error"
              action={
                <Button
                  size="small"
                  danger
                  onClick={() => {
                    getAndSetPcbToken();
                  }}
                >
                  Try Again!
                </Button>
              }
              width={80}
            />
          </>
        );
      } else {
        return <></>;
      }
    }
  } else {
    return null;
  }
};

export default DownloadResultScreen;
