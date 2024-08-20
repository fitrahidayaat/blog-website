export default function Subtitle({ subtitle, setSubtitle }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="subtitle">Introduction/Subtitle</label>
            <textarea
                id="subtitle"
                type="text"
                placeholder="Subtitle"
                required
                maxLength={500}
                className="bg-gray-900 px-4 py-3 w-full min-h-32"
                onChange={(event) => setSubtitle(event.target.value)}
            />
            <p className="text-gray-400">{subtitle.length}/500 characters</p>
        </div>
    );
}
