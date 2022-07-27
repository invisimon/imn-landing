export function RedditButton() {
  return (
    <a href="https://reddit.com/r/invisimon" target="_blank">
      <button
        className="socialButton"
        style={{
          background: `url('/misc/reddit.png')`,
        }}
      />
    </a>
  );
}

export function InstaButton() {
  return (
    <a href="https://instagram.com/invisimon" target="_blank">
      <button
        className="socialButton"
        style={{
          left: "70px",
          background: `url('/misc/instagram.png')`,
        }}
      />
    </a>
  );
}
