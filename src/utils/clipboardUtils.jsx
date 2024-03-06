//복사 붙여넣기 관련 유틸 함수

export const handleCopyClipBoard = (text) => {
  try {
    navigator.clipboard.writeText(text);
    alert("클립보드에 복사되었습니다.");
  } catch (error) {
    alert("클립보드 복사에 실패하였습니다.");
  }
};
