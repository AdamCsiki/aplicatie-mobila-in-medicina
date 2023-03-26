import style from './FullScreenModal.style'
import { Layout, Modal } from '@ui-kitten/components'
import { ModalProps } from '@ui-kitten/components/ui/modal/modal.component'

function FullScreenModal(props: ModalProps) {
    return (
        <Modal
            {...props}
            style={style.FullScreenModal}
            backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
            <Layout style={style.FSModalContainer}></Layout>
        </Modal>
    )
}

export default FullScreenModal
