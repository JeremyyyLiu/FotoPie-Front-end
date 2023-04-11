import { Grid } from "@mui/material";
import { FC } from "react";
import Collection from "./Collection";
import Gallery from "./Gallery";
import NoMore from "../Loader/NoMore";



interface ProfileGalleryAndCollectionProps {
  profileUserId: string | string[] | undefined;
  isGallery: boolean;
}


const ProfileGalleryAndCollection: FC<ProfileGalleryAndCollectionProps> = ({
  profileUserId,
  isGallery,
}: ProfileGalleryAndCollectionProps) => {
  return (
    <Grid sx={{ m: 5 }}>
      {isGallery ? <Gallery profileUserId={profileUserId} /> : <Collection profileUserId={profileUserId} />}
      <NoMore/>
    </Grid >
  );
};
export default ProfileGalleryAndCollection;
