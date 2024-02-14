import './App.css';
import Header from './components/Header';
import OrderDetails from './components/OrderDetails';


function App() {
  return (
    <div className={` bg-[url(https://s3-alpha-sig.figma.com/img/a43e/2951/5fc3ac44bcec22eb8920e33490a16c99?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RHMmx14COmt64cxP6cvSWl2ElGiUccdxYGPIAhZTcy~dawjApw2rKdEL4BP-PaQhqKhOjpue2JWimDtdZtjWlrRMrOuiab17dwZwW29D8yg6zI-s0~pKOJdzTVGlK9ht44WUaY71P0cfvwcwacNm6cVsJly9RzuTyuQEEGl0gEPDujvRkGxnz7frPyE1tr8XvFc6cEqp4eA3UCLuMLyW4e-gXUkQbo3OIqDnOUy7oefuSkKZe21qsy20ArU21C9hphMHOOfvtiHLgx3xItjErYibFFKmvgNv~JEE~b759tO6eJqrsNJ5Rc1ovbqbd4QJ0PENIvoyQhiHd1esquhcRA__)]
    min-h-screen  w-screen bg-cover bg-center`}>
      <div className='container mx-auto'>
        <div className=' w-full h-full px-4'>
        <Header />
        <OrderDetails/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
