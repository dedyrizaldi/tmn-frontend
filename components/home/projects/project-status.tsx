interface Props {
  status: "completed" | "ongoing";
}

export default function ProjectStatus({ status }: Props) {
  if (status === "completed") {
    return (
      <span
        className="
          rounded-full
          bg-green-100
          px-3
          py-1
          text-xs
          font-semibold
          text-green-700
        "
      >
        Completed
      </span>
    );
  }

  return (
    <span
      className="
        rounded-full
        bg-blue-100
        px-3
        py-1
        text-xs
        font-semibold
        text-blue-700
      "
    >
      Ongoing
    </span>
  );
}
