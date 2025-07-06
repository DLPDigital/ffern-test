// this component is lifted from the main site, virtually no changes made

export const TableDummy = () => (
  <>
    <div className="flex items-center justify-center small:hidden">
      <div className="grid w-full grid-cols-[auto_150px] grid-rows-[repeat(3,30px)] gap-y-2.5 miniPhone:grid-cols-[auto_135px] large:grid-cols-[auto_140px] [&>*.dataTitle]:pl-0 [&>*.dataTitle]:text-[0.9rem] [&>*.dataTitle]:capitalize [&>*.dataTitle]:large:text-[0.9rem] [&>*.dataTitle]:large:text-sand-900 [&>*.data]:rounded-[--buttonRadius] [&>*.data]:bg-sand-100 [&>*.data]:pl-[15px] [&>*.data]:text-[0.75rem] [&>*.data]:text-[#84786e] [&>*.joinButton]:small:border-sand-500 [&>*.joinButton]:small:bg-sand-900 [&>*.joinButton]:small:font-[FfernType] [&>*.joinButton]:small:font-semibold [&>*.joinButton]:small:tracking-[1px] [&>*.joinButton]:small:text-ash-50 [&>*.joinButton_g]:small:stroke-[#6e460b] [&>*.joinButton_g]:small:[stroke-width:18] [&>*]:flex [&>*]:items-center [&>*]:p-[3px_5px] [&>*]:uppercase">
        <div className="dataTitle">Current Season:</div>
        <div className="data">Summer 25</div>
        <div className="dataTitle">Next release:</div>
        <div className="data">
          <span>77d 2h 49m 39s</span>
        </div>
        <div className="dataTitle">Waiting List:</div>
        <div className="data">Open</div>
      </div>
    </div>
  </>
)
