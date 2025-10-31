// تغيير النص عند المرور على أيقونة الديسكورد في الأعلى
const discordText = document.getElementById("discord-text");
const discordHover = document.getElementById("discord-hover");

discordHover.addEventListener("mouseenter", () => {
  discordText.textContent = "Click to join";
});

discordHover.addEventListener("mouseleave", () => {
  discordText.textContent = "discord.gg/egy";
});
