import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Classics'
};

const explainer = `
Тут будет блог о классических проектах, которые мы делаем на платформе Aqpan.kz;
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Блог</h1>
            <Markdown content={explainer} className="mb-12" />
            <div className="flex justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}
