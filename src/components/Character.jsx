function Character({ name, status, created, url }) {
  const date = new Date(created);
  const formattedCreationDate = date.toLocaleDateString("ru-RU");
  const formattedStatus = status.toLowerCase();

  let statusClasses = "font-bold";

  if (formattedStatus === "alive") {
    statusClasses += " text-[#5dad11]";
  } else if (formattedStatus === "dead") {
    statusClasses += " text-[#820A0A]";
  } else if (formattedStatus === "unknown") {
    statusClasses += " text-[#bd8c1a]";
  }

  return (
    <a href={url}>
      <div className="py-5 px-8 border border-gray-200 shadow-md h-full min-h-[150px] flex flex-col gap-8 justify-between">
        <h2 className="text-3xl font-headings">{name}</h2>
        <div className="flex flex-col xl:flex-row gap-x-4 gap-y-1 justify-between font-primary flex-wrap">
          <p className="text-[#767676]">
            Status: <span className={statusClasses}>{status}</span>
          </p>
          <p className="text-[#767676]">Created: {formattedCreationDate}</p>
        </div>
      </div>
    </a>
  );
}

export default Character;
