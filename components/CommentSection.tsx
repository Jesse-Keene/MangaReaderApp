import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const addComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditingText(comments[index]);
  };

  const saveEdit = () => {
    if (editingIndex !== null && editingText.trim()) {
      const newComments = [...comments];
      newComments[editingIndex] = editingText;
      setComments(newComments);
      setEditingIndex(null);
      setEditingText("");
    }
  };

  const deleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a comment"
        value={commentText}
        onChangeText={setCommentText}
      />
      <Button title="Add Comment" onPress={addComment} />

      {comments.map((comment, index) => (
        <View key={index} style={styles.commentContainer}>
          {editingIndex === index ? (
            <>
              <TextInput
                style={styles.input}
                value={editingText}
                onChangeText={setEditingText}
              />
              <Button title="Save" onPress={saveEdit} />
              <Button title="Cancel" onPress={() => setEditingIndex(null)} />
            </>
          ) : (
            <>
              <Text style={styles.commentText}>{comment}</Text>
              <TouchableOpacity onPress={() => startEditing(index)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteComment(index)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  commentText: {
    flex: 1,
  },
  editButton: {
    color: "blue",
    marginRight: 10,
  },
  deleteButton: {
    color: "red",
  },
});

export default CommentSection;
