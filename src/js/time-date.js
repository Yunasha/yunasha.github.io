function updateDateTime() {
  const now = new Date();

  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const day = now.getDate();
  const month = now.toLocaleString([], { month: "short" });
  const year = now.getFullYear();

  // Get ordinal suffix (st, nd, rd, th)
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const dateStr = `${day}${getOrdinal(day)} ${month} ${year}`;

  document.getElementById("time").textContent = timeStr;
  document.getElementById("date").textContent = dateStr;
}

// Run once immediately, then every 30 seconds
updateDateTime();
setInterval(updateDateTime, 30000);
