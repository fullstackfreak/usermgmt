const Dashboard = () => {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h4>Total Users</h4>
              <p>50</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h4>Total Sales</h4>
              <p>50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
