import { useState } from 'react';
import Modal from'../components/Modal';
import Button from '../components/Button';


function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
     setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = (<Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is important ageement for you to accept
        </p>
    </Modal>
    );
  return (
  <div className='relative'>
    <Button onClick={handleClick} primary>
    Open Modal
    </Button>
    {showModal && modal}
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed quam luctus turpis iaculis mollis vel vitae odio. Donec iaculis arcu sed dui gravida, eget fermentum tellus convallis. In non dignissim magna. Aenean eget finibus purus, id luctus quam. Donec eleifend neque scelerisque, aliquam augue nec, finibus felis. Suspendisse ullamcorper maximus felis, ut gravida urna aliquam vel. Donec mattis et felis at gravida. Vestibulum mollis maximus justo, non luctus purus placerat sit amet. Nulla lacinia pharetra odio, in tempor nisi dictum in. Curabitur non aliquam sem. Cras condimentum nisl in massa sagittis ornare. Nulla volutpat rhoncus efficitur. Praesent semper enim a ipsum luctus tempor. 
    </p>
  </div>
  );
}

export default ModalPage;