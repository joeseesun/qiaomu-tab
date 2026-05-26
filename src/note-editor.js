import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

const activeEditors = new Map();

function createNoteEditor({ element, content, onUpdate }) {
  const editor = new Editor({
    element,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] }
      })
    ],
    content: content || "<p></p>",
    editorProps: {
      attributes: {
        class: "sticky-note-editor"
      }
    },
    onUpdate({ editor: currentEditor }) {
      onUpdate?.(currentEditor.getHTML());
    }
  });

  activeEditors.set(element, editor);
  return editor;
}

function destroyNoteEditor(element) {
  const editor = activeEditors.get(element);
  if (editor) {
    editor.destroy();
    activeEditors.delete(element);
  }
}

window.QiamuNoteEditor = {
  createNoteEditor,
  destroyNoteEditor
};
