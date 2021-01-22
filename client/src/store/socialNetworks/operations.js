import axios from "axios";
import { setSocialNetworks, updateSocialNetwroks, socialNetwroksLoading } from "./actions";
import { getSocialNetworks } from "./selectors";
import { saveErrObjAction } from "../errorObject/saveErrObjAction";
import { openErrModal } from "../ErrorModal/openErrModal";

export const loadSocialNetworks = () => async (dispatch) => {
  dispatch(socialNetwroksLoading(true))

  const socialNetworksFromDB = await axios({
    method: "GET",
    url: "/api/social-networks",
  })
    .then((r) => r.data)
    .catch((err) => {
      dispatch(saveErrObjAction(err));
      dispatch(openErrModal);
    });

  dispatch(setSocialNetworks(socialNetworksFromDB));
  dispatch(socialNetwroksLoading(false))
};

export const filterSocialNetworks = (id) => (dispatch, getStore) => {
  const items = getSocialNetworks(getStore());
  const filtered = items.filter((item) => item._id !== id);
  dispatch(updateSocialNetwroks(filtered));
};