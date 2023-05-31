import "./tabs.css";

export const TabsDemo = () => {
  return (
    <div className="fullScreenHeight tabsSection">
      <div className="tabsWrapper">
        <header className="inline">
          <div className="stack">
            <h3>New Members</h3>
            <p className="text">More than 400 new members</p>
          </div>
          <button>Month</button>
          <button>Day</button>
          <button>Week</button>
        </header>
      </div>
    </div>
  );
};
