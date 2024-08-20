export default function Title({title, setTitle}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                placeholder="Title"
                required
                className="bg-gray-900 px-4 py-3 w-full"
                onChange={(event) => setTitle(event.target.value)}
                maxLength="150"
            />
            <p className="text-gray-400">{title.length}/150 characters</p>
        </div>
    );
}
