export const getDialoguesForScene = (sceneId, dialogues) => {
    return dialogues.filter(dialogue => dialogue.scene === sceneId);
  };
  