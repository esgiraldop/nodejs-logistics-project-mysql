import { Request, Response } from "express";
import { createArrayCsvWriter } from "csv-writer";
import { AnalysisDataModel } from "../../model/analysisData/analysisDataModel";


export const analysisDataExport = async ( req: Request, res: Response) => {
    const id = req.params.id;
    const data = await AnalysisDataModel.exportData(parseInt(id));

    if(!data){
        return res.status(404).json({
            message: "No data found"
        });
    };

    



}

