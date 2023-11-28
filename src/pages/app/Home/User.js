import React from "react";
import {
  useGetUsersQuery,
  usePostUserMutation,
} from "src/store/query/userQuery";

function User(props) {
  const { data = [], isFetching: isListLoading } = useGetUsersQuery(
    { params: "sample params" },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [createUser, { isLoading: isFileUploading }] = usePostUserMutation();

  const createUserForm = (formData) => {
    createUser(formData)
      .unwrap()
      .then(() => {
        console.log("created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>User</div>;
}

User.propTypes = {};

export default User;
