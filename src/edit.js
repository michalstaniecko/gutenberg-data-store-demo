import { useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import './editor.scss';

export default function Edit() {
	const title = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostAttribute( 'title' ),
		[]
	);

	const dispatch = useDispatch( 'core/editor' );

	return (
		<p { ...useBlockProps() }>
			<h2>{ title }</h2>
			<input
				value={ title }
				onChange={ ( e ) =>
					dispatch.editPost( { title: e.target.value } )
				}
			/>
		</p>
	);
}
