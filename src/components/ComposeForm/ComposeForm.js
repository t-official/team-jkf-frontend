import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { makePost, getPosts } from "../../Redux/actions/posts";
import { useDispatch } from "react-redux";
import "./ComposeForm.css";

function ComposeForm({ username, teamId }) {
  const [editorValue, setEditorValue] = useState("");

  const dispatch = useDispatch();

  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editorValue !== "" || e.charCode === 13) {
      const post = { message: editorValue };
      await dispatch(makePost(post, teamId));
      await dispatch(getPosts(teamId));
    }
    setEditorValue("");
  };

  const handleKeyPress = async (e) => {
    if (e.charCode === 13) {
      await handleSubmit(e);
    }
  };

  return (
    <form className="compose-form" onSubmit={handleSubmit}>
      <div className="compose-form-container">
        <Avatar imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm" />
        <textarea
          value={editorValue}
          onChange={handleEditorValueChange}
          className="compose-form-textarea small_size"
          placeholder={`What's on your mind? ${username}`}
          onKeyPress={handleKeyPress}
        />
      </div>

      <button className="btn compose-form-submit small_size">Post</button>
    </form>
  );
}

export default ComposeForm;