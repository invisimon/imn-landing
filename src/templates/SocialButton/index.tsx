export function RedditButton() {
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

export function InstaButton() {
  return (
    <a href="https://instagram.com/invisimon" target="_blank" className="opacity-0">
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
