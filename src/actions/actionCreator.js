// Return articles with specific subject
export const FILTER_SUBJECT = "FILTER_SUBJECT";

export function filterSubject(subject) {
  return {
    type: "FILTER_SUBJECT",
    subject
  };
}
