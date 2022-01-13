import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";

const ResData = ({ data }) => {
  const { Image, Title, Body } = data;

  return (
    <Paper className="card-component" elevation={2}>
      <img src={Image} alt="cruise" className="img" />
      <CardContent>
        <h4>{Title}</h4>
        <p>{Body}</p>
      </CardContent>
    </Paper>
  );
};

export default ResData;
