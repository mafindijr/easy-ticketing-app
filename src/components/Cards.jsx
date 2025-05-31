import {useState} from 'react'
import { Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

export default function DetailCard({ title, summary, details }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card variant="outlined" onClick={handleOpen} style={{ cursor: 'pointer', margin: '1rem' }}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{summary}</Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography>{details}</Typography>
          <Button onClick={handleClose} style={{ marginTop: '1rem' }} variant="contained">Close</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}








// export default function Card (props) {

//     return (
//         <div className="max-w-xs  border border-gray-100 rounded-xl overflow-hidden bg-gray-50">
//           <img
//             src=""
//             alt=""
//             className="w-full h-52 object-cover"
//           />
//           <div className="mb-4 p-4">
//             <h2 className="text-xl font-semibold mb-2 ">name</h2>
//             <p>
//                 date
//             </p>
//             <p className="">
//               location
//             </p>
//             <p>
//                 price
//             </p>
//           </div>

//           <div>
//             <button className="bg-homeexplore text-gray-50 ml-4 mb-4 px-4 py-1 rounded-sm">Book Now</button>
//           </div>
//         </div>
//     );
// }